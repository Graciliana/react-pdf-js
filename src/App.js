import PDFViewer from "./pages/pdf-viwer";

function App() {
  return (<>
    <h1>here</h1>
    <PDFViewer url={'./pdf'} showProgressBar showToolbox />
  </>);
}

export default App;