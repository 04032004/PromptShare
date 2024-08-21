import { connectToDatabase } from "@utiles/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
       const {userId , prompt , tag} = await req.json();

       try {
                 await connectToDatabase();
                 const newPrompt = new Prompt({
                      creator : userId,
                      prompt,
                      tag 
                 })

                 await newPrompt.save();

                 return new res(JSON.stringify(newPrompt) , {status: 201})  
       } catch (error) {
           return new res("Failed to create a new prompt" , {status: 500})
       }
}

