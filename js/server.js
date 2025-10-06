import mysql from 'mysql2/promise'; 

const connectionOptions = {
  user: 'root', 
  host: 'localhost',      
  database: 'mrm',        
  password: '',
  port: 3306,             
};

async function ingatlanok() {
  let connection;
  
  try {
    connection = await mysql.createConnection(connectionOptions);
    console.log("✅ Sikeresen csatlakozva az 'mrm' adatbázishoz.");

    const tablaNev = 'ingatlanok'; 
    
    const [sorok, mezoInfo] = await connection.execute(`SELECT * FROM ${tablaNev}`);
    
    console.log(`\n➡️ Eredmények a(z) '${tablaNev}' táblából (${sorok.length} sor):`);
    
    if (sorok.length > 0) {
        console.log(sorok);
    } else {
        console.log("Nincsenek adatok a táblában.");
    }
    
  } catch (err) {
    console.error("\n❌ Hiba történt a csatlakozás vagy a lekérdezés során:");
    console.error(err.message);
    
  } finally {
    if (connection) {
        await connection.end(); 
        console.log("\n🛑 Kapcsolat lezárva.");
    }
  }
}

async function Ugynokok() {
  let connection;
  
  try {
    connection = await mysql.createConnection(connectionOptions);
    console.log("✅ Sikeresen csatlakozva az 'mrm' adatbázishoz.");

    const tablaNev = 'alkalmazott'; 
    
    const [sorok, mezoInfo] = await connection.execute(`SELECT * FROM ${tablaNev}`);
    
    console.log(`\n➡️ Eredmények a(z) '${tablaNev}' táblából (${sorok.length} sor):`);
    
    if (sorok.length > 0) {
        console.log(sorok);
    } else {
        console.log("Nincsenek adatok a táblában.");
    }
    
  } catch (err) {
    console.error("\n❌ Hiba történt a csatlakozás vagy a lekérdezés során:");
    console.error(err.message);
    
  } finally {
    if (connection) {
        await connection.end(); 
        console.log("\n🛑 Kapcsolat lezárva.");
    }
  }
}
ingatlanok();
Ugynokok();