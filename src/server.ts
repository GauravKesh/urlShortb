 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from './config/config';
import app from './app';



const server = app.listen(config.PORT)



;(()=>{
    try{
        //Database connetion
        // console.info(`APPLICATION_STARTED`,{
        //     meta:{
        //         PORT:config.PORT,
        //         SERVER_URL:config.SERVER_URL
        //     }
        // })

    }catch(err){
        // console.error(`APPLICATION_ERROR`,{ meta:{err}})
        
        server.close((error :Error | undefined)=>{
            if(error){
                // console.error(`APPLICATION_ERROR`,{ meta:{err}})
            }
        })

    }
})()

