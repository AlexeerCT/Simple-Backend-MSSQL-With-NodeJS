import sql from "mssql";
import { dbSettings } from "./config";

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
    
        const result = await pool.query("SELECT FORMAT(GETDATE(), 'yyyy-MM-dd - HH:mm:ss') AS Date;");
        const time = result.recordset[0];
        console.log('Conexión exitosa', time);
    
        return pool;
    } catch (error) {
        console.log(error);
    } 
}
