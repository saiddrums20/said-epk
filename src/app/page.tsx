'use client'
import Image from "next/image";
import styles from "./page.module.scss";

import heroImage from '@/public/images/largerHero.jpg';
import ReactPlayer from "react-player";
import ShowDate from "../shared/components/dates/dates";

import bio from '@/public/bios/short-bio.json';
import Link from "next/link";

export default function Home() {  
  return (
    <div className={styles['homepage']}>
      <section id="header" className={styles['homepage__header']}>
        <div>
          <div className={styles['homepage__header__title']}>Said Sarabia</div>
          <div className={styles['homepage__header__subtitle']}>Baterista / Compositor</div>
        </div>
        <Image alt="heroImage" src={heroImage} width={360} />
        <div className={styles['homepage__header__shortBio']}>
          {bio.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <Link href="/resume">
          {'+ mostrar más'}
        </Link>
      </section>
      
      <section id="show_dates" className={styles['homepage__dates']}>
        <div className={styles['homepage__dates__title']}>2025</div>
        <ShowDate
          band="the jazz bus"
          date="12 de junio"
          venue="tbd café"
          city="mexicali, méxico"
          url="odfewj"
        />
        <ShowDate
          band="the jazz bus"
          date="13 de junio"
          venue="workaholic"
          city="mexicali, méxico"
          url="odfewj"
        />
        <ShowDate
          band="brian arroyo & said sarabia: lo que no puedo decir con palabras"
          date="26 al 28 de junio"
          venue="galería tres ojos"
          city="mexicali, méxico"
          url="odfewj"
        />
        <ShowDate
          band="said sarabia cuarteto"
          date="30 de junio"
          venue="pizzería la camorra"
          city="ensenada, mexico"
          url="odfewj"
        />
      </section>

      <section id="media" className={styles['homepage__media']}>
        <div className={styles['homepage__dates__title']}>media</div>
        <a
          href="/assets/fotos Said Sarabia.zip"
          download
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          + descargar fotos
        </a>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zmodsFoN8bE"
          className="react-player"
          width="360px"
          height="360px"
          controls
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=i5FnHzGdVhs"
          className="react-player"
          width="360px"
          height="360px"
          controls
        />
        <ReactPlayer
          url="https://youtu.be/_kDcqJgmS38?si=dsWvE91ji6M5e8RP"
          className="react-player"
          width="360px"
          height="360px"
          controls
        />
      </section>

      <section id="discografía" className={styles['homepage__discog']}>
        <div className={styles['homepage__discog__title']}>discografía</div>
        <iframe src="https://open.spotify.com/embed/album/1p29uOzLHFXMhArUJcXXmz?utm_source=generator" width="30%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe src="https://open.spotify.com/embed/album/45n6faLR2N16EwJPPu5adp?utm_source=generator" width="30%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe style={{border: '0px'}} src="https://bandcamp.com/EmbeddedPlayer/track=3469741936/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" width="40%" height="120" seamless><a href="https://saidsarabia.bandcamp.com/track/la-mirada">la mirada by Said Sarabia</a></iframe>
        <iframe
        width="40%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1854269670&color=%23303030&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        style={{ border: 'none' }}
      />
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          lineBreak: 'anywhere',
          wordBreak: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontFamily:
            'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
          fontWeight: 100,
        }}
      >
        {' '}
        ·{' '}
      </div>
      </section>

      <section id="contacto" className={styles['homepage__contacto']}>
        <div className={styles['homepage__contacto__title']}>contacto</div>
        <div className={styles['homepage__contacto__email']}>ssarabia@berklee.edu</div>
        <div className={styles['homepage__contacto__insta']} onClick={() => window.open('https://www.instagram.com/pocketyswang/', '_blank')}>instagram</div>
        <div>+52 686 108 5760</div>
      </section>

      <section id="copyright" className={styles['homepage__copyright']}>© said sarabia 2025</section>
    </div>
  );
}
