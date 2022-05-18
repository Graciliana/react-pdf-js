import * as PDFJS from 'pdfjs-dist'
import { useEffect } from 'react';

export default function PDFViewer({url}){

  console.log(PDFJS);

  const f = async () => {
    const c = await PDFJS.getDocument(url)
    console.log(c.onPassword);
  }

  return (<>
    <h1>{url}</h1>
    <button onClick={f}>here</button>
  </>)
}