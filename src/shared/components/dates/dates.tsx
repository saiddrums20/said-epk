import styles from './dates.module.scss'

interface Props {
    band: string;
    date: string;
    venue: string;
    city: string;
    url: string;
}

export default function ShowDate({ band, date, venue, city, url }: Props) {
    return(
        <div className={styles['show']}>
        <div className={styles['show__band']}>{band}</div>
        <div className={styles['show__date']}>{date}</div>
        <div className={styles['show__venue']}>{venue}</div>
        <div className={styles['show__city']}>{city}</div>
        <div className={styles['show__info']} onClick={() => window.open(url, '_blank')}>+ información</div>
      </div>
    )
}