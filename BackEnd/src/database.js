import sql from "mssql";
import { dbSettings } from "./config";

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        
        return pool;
    } catch (error) {
        console.log(error);
    } 
}
