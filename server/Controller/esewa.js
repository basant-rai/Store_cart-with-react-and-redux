

exports.esewaPay = async (req, res) => {
  const esewaEndpoint = 'https://rc-epay.esewa.com.np/api/epay/main/v2/form';
  const esewaPayload = {
    amount: req.body.amount,
    tax_amount: req.body.tax_amount,
    total_amount: req.body.total_amount,
    transaction_uuid: req.body.transaction_uuid,
    product_code: req.body.product_code,
    product_service_charge: req.body.product_service_charge,
    product_delivery_charge: req.body.product_delivery_charge,
    success_url: req.body.success_url,
    failure_url: req.body.failure_url,
    signed_field_names: req.body.signed_field_names,
    signature: req.body.signature
  };

  try {
    const response = await fetch(esewaEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(esewaPayload),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error initiating eSewa payment:', error);
    res.status(500).json({ error: 'Failed to initiate payment' });
  }
};