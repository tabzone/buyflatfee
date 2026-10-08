const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Please submit a valid message.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return Response.json({ error: 'Please submit a valid message.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 120) : '';
  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 254) : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const source = body.source === 'chat' ? 'Website chat' : 'Website contact form';
  const purchaseType = typeof body.type === 'string' ? body.type.trim().slice(0, 80) : '';
  const budget = typeof body.budget === 'string' ? body.budget.trim().slice(0, 80) : '';
  const timeline = typeof body.timeline === 'string' ? body.timeline.trim().slice(0, 80) : '';
  const timeSlot = typeof body.timeSlot === 'string' ? body.timeSlot.trim().slice(0, 80) : '';

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || message.length > MAX_MESSAGE_LENGTH) {
    return Response.json({ error: 'Please enter a valid name, email, and message.' }, { status: 400 });
  }

  // RESEND_API_KEY is the requested environment variable name; its value is the Web3Forms access key.
  const accessKey = process.env.RESEND_API_KEY;

  if (!accessKey) {
    return Response.json(
      { error: 'Message delivery is not configured yet. Please call (415) 488-6657.' },
      { status: 503 },
    );
  }

  const safeName = name.replace(/[\r\n]+/g, ' ');
  const safeEmail = email.replace(/[\r\n]+/g, '');
  const phone = typeof body.phone === 'string' ? body.phone.trim().slice(0, 40) : '';

  try {
    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', safeName);
    formData.append('email', safeEmail);
    formData.append('message', [
      message,
      '',
      `Inquiry source: ${source}`,
      phone ? `Phone: ${phone}` : null,
      purchaseType ? `Inquiry type: ${purchaseType}` : null,
      budget ? `Budget: ${budget}` : null,
      timeline ? `Timeline: ${timeline}` : null,
      timeSlot ? `Preferred call time: ${timeSlot}` : null,
    ].filter((line) => line !== null).join('\n'));
    formData.append('subject', `${source}: ${safeName}`);

    const providerResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    let providerResult;
    try {
      providerResult = await providerResponse.json();
    } catch {
      providerResult = null;
    }

    if (!providerResponse.ok || !providerResult?.success) {
      console.error('Contact form delivery failed:', providerResponse.status, providerResult);
      const providerMessage = typeof providerResult?.message === 'string'
        ? providerResult.message.replace(/[\r\n]+/g, ' ').slice(0, 200)
        : '';
      return Response.json(
        { error: providerMessage || 'Web3Forms rejected the submission. Please check the server logs.' },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form request failed:', error);
    return Response.json(
      { error: 'The server could not reach Web3Forms. Check the server connection and try again.' },
      { status: 502 },
    );
  }
}
