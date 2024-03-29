import React from 'react'
import PortfolioStyle from "./Pages.module.scss";


const Portfolio = () => {
    return (
        <div>
            <article className={PortfolioStyle["article"]}>
                <h2 className={PortfolioStyle}>
                    my work
                </h2>

                <section className={PortfolioStyle["article-item"]}>
                    <h3 className={PortfolioStyle["title-3"]}>
                        Верстка макета Форест Тревел

                    </h3>
                    <img src="" alt="Верстка макета Форест Тревел" />

                    <p className={PortfolioStyle["article-item-text"]}>Верстка многостраничного сайта для турагентства.</p>

                    <a
                        href="#"
                        target='_blank'
                        className={PortfolioStyle["article-item-link"]}
                    >Смотреть работу</a>

                </section>


            </article>
        </div>
    )
}

export default Portfolio