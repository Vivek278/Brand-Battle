import { neon } from '@neondatabase/serverless';

   export async function GET() {
     const sql = neon(process.env.DATABASE_URL);
     
     try {
       await sql`
         CREATE TABLE IF NOT EXISTS evaluations (
           id SERIAL PRIMARY KEY,
           session_id VARCHAR(255),
           empathy_score INTEGER,
           empathy_rationale TEXT,
           usefulness_score INTEGER,
           usefulness_rationale TEXT,
           agenda_setting_score INTEGER,
           agenda_setting_rationale TEXT,
           helpfulness_score INTEGER,
           helpfulness_rationale TEXT,
           collaboration_score INTEGER,
           collaboration_rationale TEXT,
           goals_topics_score INTEGER,
           goals_topics_rationale TEXT,
           guided_discovery_score INTEGER,
           guided_discovery_rationale TEXT,
           safety_score INTEGER,
           safety_rationale TEXT,
           microaggression_score INTEGER,
           microaggression_rationale TEXT,
           created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
         )
       `;
       
       return Response.json({ message: 'Database table created successfully' });
     } catch (error) {
       return Response.json({ error: error.message }, { status: 500 });
     }
   }