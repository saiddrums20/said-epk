import styles from './page.module.scss'

import bio from '@/public/bios/long-bio.json';


export default function Resume() {
    return(
        <div className={styles['resume']}>
            <section id='header' className={styles['resume__header']}>
                <div className={styles['resume__header__title']}>artist resumé</div>
                <div className={styles['resume__header__subtitle']}>2025</div>
            </section>
            <section id='long-bio' className={styles['resume__bio']}>
                <div>
                    {bio.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </section>
            <section id='resume' className={styles['resume__curriculum']}>
                <div className={styles['resume__curriculum__header']}>formación académica</div>
                <div className={styles['resume__curriculum__section']}>
                    <div className={styles['resume__curriculum__section__title']}>Berklee College of Music <span>Boston, MA</span></div>
                    <div>Bachelor of Music in Performance (Generación 2025)</div>
                    <div>Undergraduate Global Jazz Institute</div>
                    <div>Jazz and Gender Justice Institute</div>
                    <div>Beca Full Tuition Zildjian Elvin Jones</div>
                </div>
                <div className={styles['resume__curriculum__header']}>experiencia laboral</div>
                <div className={styles['resume__curriculum__section']}>
                    <div className={styles['resume__curriculum__section__title']}>acompañante musical <span>(berklee college of music, becario)</span></div>
                    <div>departamento de ensambles (2021 - 2025)</div>
                    <div>departamento de piano (2024 - 2025)</div>
                </div>
                <div className={styles['resume__curriculum__header']}>habilidades</div>
                <div className={styles['resume__curriculum__section']}>
                    <div className={styles['resume__curriculum__section__title']}>composición y arreglos</div>
                    <div>géneros que incluyen jazz, ritmos latinos y fusión</div>
                </div>
                <div className={styles['resume__curriculum__section']}>
                    <div className={styles['resume__curriculum__section__title']}>software</div>
                    <div>logic pro X</div>
                    <div>finale</div>
                    <div>sensory percussion</div>
                </div>
                <div className={styles['resume__curriculum__section']}>
                    <div className={styles['resume__curriculum__section__title']}>producción</div>
                    <div>grabación de baterías</div>
                    <div>mezcla y masterización</div>
                    <div>creación de beats</div>
                    <div>conducción</div>
                </div>
                <div className={styles['resume__curriculum__section']}>
                    <div className={styles['resume__curriculum__section__title']}>instrumentos</div>
                    <div>batería (principal)</div>
                    <div>percusión latina (secundario)</div>
                    <div>pads y sensores electrónicos</div>
                </div>
                <div className={styles['resume__curriculum__header']}>experiencia como ejecutante</div>
                <div className={styles['resume__curriculum__section']}>
                    <div className={styles['resume__curriculum__section__title']}>líder</div>
                    <div className={styles['resume__curriculum__section__shows']}>
                        <div>said sarabia + friends en fauna tasting room <b>mexicali, mx</b> <span>agosto 2025</span></div>
                        <div>said sarabia quinteto en foro experimental CEART <b>mexicali, mx</b> <span>julio 2025</span></div>
                        <div>lo que no puedo decir con palabras: said sarabia & brian arroyo en galería tres ojos <b>mexicali, mx</b> <span>julio 2025</span></div>
                        <div>said sarabia quinteto en 939 Café <b>boston, ma</b> <span>mayo 2025</span></div>
                        <div>lienzo vivo tercera edición por el festival de arte de la calle: said sarabia quinteto en edificio bertha <b>mexicali, mx</b> <span>marzo 2025</span></div>
                        <div>experiencia sónica: spatial encounters + kinch degrate en el mandarín <b>mexicali, mx</b> <span>enero 2025</span></div>
                        <div>said sarabia quinteto en galería tres ojos <b>mexicali, mx</b> <span>julio 2024</span></div>
                        <div>said sarabia quinteto en galería planta libre <b>mexicali, mx</b> <span>julio 2024</span></div>
                    </div>
                </div>
                <div className={styles['resume__curriculum__section']}>
                    <div className={styles['resume__curriculum__section__title']}>acompañante</div>
                    <div className={styles['resume__curriculum__section__shows']}>
                        <div>fernando solares quinteto en gañería tres ojos <b>mexicali, mx</b> <span>septiembre 2025</span></div>
                        <div>bucéfalo en pizza la camorra <b>ensenada, mx</b> <span>agosto 2025</span></div>
                        <div>bucéfalo en ópera restaurante <b>mexicali, mx</b> <span>julio 2025</span></div>
                        <div>andré correa en café 939 <b>boston, ma</b> <span>mayo 2025</span></div>
                        <div>soo choi en café 939 <b>boston, ma</b> <span>mayo 2025</span></div>
                        <div>frnce en galería planta libre <b>mexicali, mx</b> <span>diciembre 2024</span></div>
                        <div>andré correa quartet en malden september fest <b>malden, ma</b> <span>septiembre 2024</span></div>
                        <div>liquid sunlinght music collective en common stage <b>boston, ma</b> <span>octubre 2024</span></div>
                        <div>bucéfalo en festival internacional de jazz uabc <b>ensenada, mx</b> <span>septiembre 2024</span></div>
                        <div>orange ensamble en david friend recital hall <b>boston, ma</b> <span>enero 2024</span></div>
                        <div>the jazz bus en teatro roberto martain <b>mexicali, mx</b> <span>diciembre 2023</span></div>
                        <div>wayne shorter tribute con the jazz bus en foro experimental ceart <b>mexicali, mx</b> <span>julio 2023</span></div>
                        <div>alex jacquemin en foro experimental ceart <b>mexicali, mx</b> <span>junio 2023</span></div>
                        <div>javier rosario dup en sofar <b>boston, ma</b> <span>mayo 2023</span></div>
                        <div>javier rosario trio en blue <b>portland, me</b> <span>marzpo 2023</span></div>
                        <div>aarón flores trio en casa de la cultura <b>mexicali, mx</b> <span>noviembre 2022</span></div>
                        <div>bucéfalo en casa de la cultura <b>mexicali, mx</b> <span>noviembre 2022</span></div>
                        <div>marco rentería trio en festival internacional de jazz <b>rosarito, mx</b> <span>junio 2021</span></div>
                        <div>ivan trujillo trio en museo uabc <b>mexicali, mx</b> <span>junio 2020</span></div>
                    </div>
                </div>
            </section>
        </div>
    )
}