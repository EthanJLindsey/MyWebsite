import '../css/App.css';

export default function Resume() {
  return (
    <iframe
      src='Resume.pdf'
      title='Resume'
      className='resume'
      width='99%'
      style={{flex:1}}
    ></iframe>
  );
}
