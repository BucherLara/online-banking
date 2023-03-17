export default function handler(req, res) {
    // Check that the request method is POST
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }
  
    // Check that the request has a valid session cookie
    if (!req.cookies.session) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
  
    // Parse the JSON data from the request body
    const { name, iban, amount } = req.body;
  
    // TODO: Implement transfer logic

    console.log(name, iban, amount)
    console.log(req.cookies.session);
  
    // Return a success message
    res.status(200).json({ name, iban, amount });
  }
  