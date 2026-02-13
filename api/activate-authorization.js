// api/activate-authorization.js
import { BigQuery } from '@google-cloud/bigquery';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { traceId, timestamp, assessmentData } = req.body;

    if (!traceId || !timestamp || !assessmentData) {
      return res.status(400).json({ 
        error: 'Missing required fields: traceId, timestamp, assessmentData' 
      });
    }

    const bigquery = new BigQuery({
      // Your verified Project ID from Screenshot (4)
      projectId: 'cw-bigquery-486719', 
      // This pulls the key you loaded into Vercel yesterday
      credentials: JSON.parse(process.env.GCP_SERVICE_ACCOUNT_KEY)
    });

    const row = {
      trace_id: traceId,
      timestamp: timestamp,
      assessment_data: assessmentData,
      created_at: new Date().toISOString()
    };

    await bigquery
      // Updated to match the dataset name in Screenshot (6)
      // If the table name is different than 'authorizations', change it here:
      .dataset('compliance_worxs_ledger') 
      .table('authorization_assessments')
      .insert([row]);

    return res.status(200).json({
      success: true,
      message: 'Authorization recorded in BigQuery ledger',
      ledgerRecord: { traceId, timestamp, status: 'AUTHORIZED' }
    });

  } catch (error) {
    console.error('BigQuery Insert Error:', error);
    return res.status(500).json({
      error: 'Failed to write to BigQuery ledger',
      details: error.message
    });
  }
}
