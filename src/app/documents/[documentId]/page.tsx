import {Editor} from "./editor";


interface DocumentIdPageProps{
    params: Promise <{documentId: string}> 
};

//this code  uses a promise and assigns the string to the document id 

const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
    // const awaitedParams = await params;
    // const documentId = awaitedParams.documentId
    
    const{documentId} = await params;
    
    return ( 
        <div className = "min-h-screen bg-[#FAFBD]">
           
           <Editor/>
        </div>
     );
}
 
export default DocumentIdPage;