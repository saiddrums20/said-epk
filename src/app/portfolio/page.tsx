'use client'
import styles from './page.module.scss'
import ReactPlayer from 'react-player'

export default function Portfolio() {
    return(
        <div className={styles['portfolio']}>
            <section id='header' className={styles['portfolio__header']}>
                <div className={styles['portfolio__header__title']}>creative portfolio</div>
            </section>
            <section id="filmscoring" className={styles['portfolio__filmscoring']}>
                <div className={styles['portfolio__filmscoring']}>+ film scoring</div>
                <div className={styles['portfolio__filmscoring__film']}>
                    <div className={styles['portfolio__filmscoring__film__title']}><b>Regreso a casa - Horacio Pereida</b></div>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=Kli_ToHyOt8"
                        className="react-player"
                        width="720px"
                        height="360px"
                        controls
                    />
                    <div className={styles['portfolio__filmscoring__film__about']}>
                        <div>Para la composición de este corto me inspiré mucho en el sentimiento de nostalgia que provoca el regresar a casa siendo foráneo. Ese primer estrés pero con emoción que llega a un climax cuando empiezas a recordar las cosas de tu ciudad</div>
                    </div>
                    <div className={styles['portfolio__filmscoring__film__credits']}>
                        <div><b>Fotografía:</b> Horacio Pereida</div>
                        <div><b>Composición musical:</b> Said Sarabia</div>
                        <div>Septiembre 2025</div>
                    </div>
                </div>
                <div className={styles['portfolio__filmscoring__film']}>
                    <div className={styles['portfolio__filmscoring__film__title']}><b>Creed - Ryan Coogler (Student Project)</b></div>
                    <ReactPlayer
                        url="https://youtu.be/Jzg0WhKenws?si=HzCiZ0RhIozGm6gN"
                        className="react-player"
                        width="720px"
                        height="360px"
                        controls
                    />
                    <div className={styles['portfolio__filmscoring__film__about']}>
                        <div>Esta práctica de la materia de historia de film scoring se pidio elegir una escena donde no hubiera normalmente un score para poder crear uno que sintamos puede quedarle. Aquí me encantó la idea de combinar el sonido viceral de improvización en la batería junto con cantos y cuerdas muy espirituales</div>
                    </div>
                    <div className={styles['portfolio__filmscoring__film__credits']}>
                        <div><b>Dirección:</b> Ryan Coogler</div>
                        <div><b>Diseño de sonido:</b> Said Sarabia</div>
                        <div>Marzo 2024</div>
                    </div>
                </div>
            </section>
        </div>
    )
}