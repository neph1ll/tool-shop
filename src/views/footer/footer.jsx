import React from "react"; // Импорт библиотеки React
import styles from './footer.module.scss'; // Импорт CSS модулей для стилизации компонента

// Компонент для отображения нижнего колонтитула (Footer)
export const Footer = () => {
    return (
        <footer> {/* Тег footer, основной контейнер для нижнего колонтитула */}
            <div> {/* Контейнер для заголовка "Contact" */}
                <h2 className={styles.title}>
                    Contact {/* Заголовок "Contact" с применением стилей из CSS модуля */}
                </h2>
            </div>
            <section className={styles.contSection}> {/* Контейнер для секции с контактной информацией */}
                <div className={styles.firstDiv} > {/* Контейнер для информации о телефоне */}
                    <h3>Phone</h3> {/* Заголовок "Phone" */}
                    <p className={styles.paragraph}>+49 999 999 99 99</p> {/* Контактный телефон */}
                </div>
                <div className={styles.secondDiv}> {/* Контейнер для информации о адресе */}
                   
                   
                    <h3>Address</h3> {/* Заголовок "Address" */}

                    <a href="https://www.google.com/maps/place/Starta+Institute+by+Tel-Ran/@52.5079361,13.3724698,17z/data=!3m2!4b1!5s0x47a851cbc6be2f3b:0x7edf0a3a9c29227c!4m6!3m5!1s0x47a8515353a68755:0xd0866511db4f838f!8m2!3d52.5079329!4d13.3750447!16s%2Fg%2F11sb3nrbfl?entry=ttu" target="_blank" rel="noopener noreferrer">
                    <p className={styles.paragraph}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p> </a>
                    {/* Адрес */}
                </div>
                <div className={styles.thirdDiv}> {/* Контейнер для информации о рабочих часах */}
                    <h3>Working Hours</h3> {/* Заголовок "Working Hours" */}


                    <p className={styles.paragraph}>24 hours a day</p> {/* Информация о рабочих часах */}
                </div>
                <div className={styles.fourthDiv}> {/* Контейнер для информации о социальных сетях */}
                    <h3>Socials</h3> {/* Заголовок "Socials" */}
                   
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <p className={styles.paragraph}>Instagram</p>
                    </a> {/* Информация о социальных сетях */}

                </div>
            </section>
            <div className={styles.mapConteiner}> {/* Контейнер для карты */}
                <iframe
                    width="1360"
                    height="350"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=1280&amp;height=764&amp;hl=en&amp;q=52.5030591,13.364968&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe> {/* Встроенный iframe элемент для отображения Google Maps */}
            </div>
        </footer>
    );
};
