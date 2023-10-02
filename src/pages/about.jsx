import React from 'react'
import '../styles/about.css'
import phone1 from '../images/phone2.webp'

function About() {
    return (
        <>
            <div className='about'>a
                <div className='container'>
                    <div className='aboutus'>
                        <div>
                            <header className='aboutus-header'>Hakkımızda</header>
                            <div className='aboutus-text'>
                                Canlı yayın platformları, bugün milyonlarca yayıncıya oyun, dans, müzik, mizah gibi
                                kategorilerde yeteneklerini sergilemesi için olanak sağlıyor. Diğer uygulamalardan farklı olarak
                                içerik üreticilerini, dogrudan ve gerçek zamanlı olarak izleyicilerle buluşturuyor. Bu sayede
                                kullanıcıların yayıncı ile samimi ve duygusal bir bağ kurmasını sağlıyor.
                                Bu bağın sağlanmasinda öncülük etmeleriyle TikTok, Bigo Live ve Twitch gibi platformlar kısa
                                sürede büyuk bir ivme yakaladı. içerik üreticilerinin diğer platformlarda karşılaştığı artılar ve
                                eksiler, canlı yayın platformlarına olan ilgiyi daha da arttırdı.
                                <div className='aboutus-subtext'>
                                    Bunların yanı sıra Superlive'da son zamanlarda ülkemizde hızla yükselişe geçen canlı yayın platformlarından biri olmayı başardı
                                    ve kullanıcılarına sunduğu kolay ve kullanışlı ara yüzü ile iyi işler başardı diyebiliriz. Rich Fame Agency olarak Superlive
                                    platformunda 100'den fazla yayıncımız ile ekip olarak bulunmaktayız. Yaklaşık 7 yıllık
                                    sosyal medya deneyimimiz ile bigo, nonolive, mico gibi benzeri platformlarda yine
                                    Rich Fame Agency olarak boy gösterdik ve gelişmekte olan Superlive platformunda da yerimizi aldık
                                    Sizleri de aramızda görmekten memnuniyet duyacağız.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='numbers'>
                        <div className='section-1'><span>Alınan Yayıncılar</span><span>195+</span></div>
                        <div className='section-2'><span>Oyun Yayıncıları</span><span>27+</span></div>
                        <div className='section-3'><span>Sohbet Yayıncıları</span><span>168+</span></div>
                        <div className='section-4'><span>Bekleyen Başvurular</span><span>23</span></div>
                    </div>
                </div>
            </div></>
    )
}

export default About