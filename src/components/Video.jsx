import clsx from "clsx";

const Video = ({ image, title, chanel }) => {

  // const articleClassNames = ('video-card' + chanel === 'Marques Brownlee' ? ' special' : '');

  /* let articleClassNames = ['video-card'];
  if (chanel === 'Marques Brownlee') {
    articleClassNames.push('special');
  } */

  return (
    // <article className={`${articleClassNames}`}>
    <article className={clsx('flex flex-col gap-2', { special: chanel === 'Marques Brownlee' })}>
      <img className="w-full rounded-lg object-cover aspect-video" src={image} alt="" />
      <footer className="grid gap-2 grid-cols-[3rem_1fr]">
        {chanel ? (
          <img 
            className="col-start-1 col-end-2"
            src={`https://api.decibear.com/8.x/identicon/svg?seed=${chanel}`} alt="" 
          />
        ) : (
          <span>No hay imagen</span>
        )}
        <p className="col-start-2 col-end-3">{title}</p>
        <p className="col-start-2 col-end-3">{chanel}</p>
      </footer>
    </article>
  )
}

export default Video;