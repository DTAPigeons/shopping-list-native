import SQLite from 'react-native-sqlite-storage';

export function runSQLQuery(db, query, params) {
    return db.executeSql(query, params).then((result)=>{
        return {
            success:true,
            error: false,
            result: result[0]        
        }})
        .catch((error)=>{
            return{
                success:false,
                error: error
            }
        })
}