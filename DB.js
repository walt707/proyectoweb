const connectDB = require('mongodb+srv://walter:vera1996@cluster1.crkpetx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');
connectDB();

const { MongoClient, ServerApiVersion } = require('mongodb');

// Codifica la contraseña por seguridad
const password = encodeURIComponent("vera1996");
const uri = `mongodb+srv://walter:vera1996@cluster0.7ubiz1u.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  connectTimeoutMS: 10000, // 10 segundos de tiempo de espera
  socketTimeoutMS: 45000, // 45 segundos de inactividad
});

async function run() {
  try {
    await client.connect();
    console.log("Conectando a MongoDB Atlas...");
    
    const db = client.db(`mongodb+srv://walter:vera1996@cluster0.7ubiz1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`); // Reemplaza "test" con tu base de datos
    const pingResult = await db.command({ ping: 1 });
    
    if (pingResult.ok === 1) {
      console.log("✅ Conexión exitosa. Ping respondió correctamente.");
    } else {
      console.log("⚠️  Ping falló:", pingResult);
    }
  } catch (err) {
    console.error("❌ Error crítico:", err.message);
  } finally {
    await client.close();
    console.log("Conexión cerrada.");
  }
}

run();