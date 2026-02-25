interface DocumentsLayoutProps
{
    children: React.ReactNode;
}




const DocumentsLayout = ({children}: DocumentsLayoutProps) => {
    return ( 
    <div>
        <nav>Document navbar</nav>
        {children}
    </div> 
    );
}
 
export default DocumentsLayout;