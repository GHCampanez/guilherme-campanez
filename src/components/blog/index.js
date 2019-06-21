import React from 'react';
import "./styles.css";
import xiaomi from '../../resources/images/ia.jpg';
import spotify from '../../resources/images/spotify.jpg';
import huawei from "../../resources/images/huawei.jpeg";

const Blog = () => {
    return (
        <>
            <div id="blog">
                <h2>Blog</h2>
                <div id = "container-nt">
                    <div className = "notice">
                        <a href = "https://www.tecmundo.com.br/produto/142835-xiaomi-amazfit-bip-r-224.htm" target = "blank">
                            <img src={xiaomi} alt="inteligencia artificial"></img>
                        </a>
                        <a href = "https://www.tecmundo.com.br/produto/142835-xiaomi-amazfit-bip-r-224.htm" target = "blank">
                            <h3>Xiaomi Amazfit Bip por apenas R$ 224</h3>
                        </a>
                        <p>Por Camila da Silva | 21/06/2019</p>
                        <p>O Xiaomi Amazfit Bip é, sem sombra de dúvidas, um dos smartwatches que mais apresenta custo-benefício. E A boa notícia é que ele está ainda mais barato e pode ser comprado por menos de R$224 na GearBest, uma das maiores lojas que importa produtos da China. </p>
                    </div>

                    <div className = "notice">
                        <a href = "https://www.tecmundo.com.br/mercado/142699-spotify-direciona-anuncios-baseado-podcasts-voce-ouve.htm" target = "blank">
                            <img src={spotify} alt="iphone"></img>
                        </a>
                        <a href = "https://www.tecmundo.com.br/mercado/142699-spotify-direciona-anuncios-baseado-podcasts-voce-ouve.htm" target = "blank">
                            <h3>Spotify agora direciona anúncios com base nos podcasts que você ouve</h3>
                        </a>
                        <p>Por Camila Pessoa| 20/06/2019</p>
                        <p>O serviço de streaming tem investido em podcasts, inclusive com parcerias com empresas jornalísticas para oferecer conteúdo exclusivo aos seus usuários. A informação de hoje é mais uma indicação da importância dos programas para o serviço de streaming, sendo também uma estratégia para valorizar os anúncios e gerar mais receita a partir deles.</p>
                    </div>

                    <div className = "notice">
                        <a href = "https://www.tecmundo.com.br/software/142617-huawei-testa-novo-so-1-milhao-smartphones-diz-site.htm" target = "blank">
                            <img src= {huawei} alt="mac pro"></img>
                        </a>
                        <a href = "https://www.tecmundo.com.br/software/142617-huawei-testa-novo-so-1-milhao-smartphones-diz-site.htm" target = "blank">
                            <h3>Huawei já testa novo SO em mais de 1 milhão de smartphones, diz site</h3>
                        </a>
                        <p>Por Denisson Antunes Soares | 20/06/2019</p>
                        <p>De acordo com informações divulgadas pelo site de notícias China Daily, o sistema operacional da Huawei já estaria sendo testado na terra natal da companhia, a China. Pelo que está sendo noticiado em alguns canais até o momento, o SO foi instalado em 1 milhão de smartphones ao redor do mundo nessa fase.</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Blog;