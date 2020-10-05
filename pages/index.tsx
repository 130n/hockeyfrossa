import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedFrisyrData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }: { allPostsData: { date: string; title: string; id: string }[] }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    <h2>Introduktion</h2>
                    <p>
                        Syftet med denna hemsida är att kasta lite ljus på en genom tiderna
                        föraktad och förföljd frisyrtyp. Jag har försökt att skapa en guide
                        till hjälp för gemene man, för att öka förståelsen och se skillnaden
                        på de olika typerna, för att skilja på "Hockey" och "Hockey". Samtidigt
                        vill jag även påpeka att Hockeyfrillan haft en större betydelse för
                        hela den kristna och judiska tron än man vanligtvis är medveten om.
                    </p>
                    <p>
                        Sedan tidernas begynnelse har Hockyefrillan varit hatad och behandlad
                        som en styggelse (bortsett från de gyllene åren en bit in på 1980-talet
                        e.Kr). Man gjorde allt för att rättfärdiga den inhumana behandlingen
                        av den lilla folkgrupp som bar Ishockeyfrisyr. Man till och med skrev
                        om ett viktigt stycke i andra kapitlet i Första Moseboken, nämligen
                        stycket om den sjunde dagen. Man ljög ihop en historia att gud bara
                        slappade på sjunde dagen och fick dessutom en ledig dag på köpet.
                    </p>
                    <p>
                        Några av världens mest aktade teologer har dock lyckats få fram och
                        presentera den bibliska text som varit undangömd och bortglömd sedan
                        länge tillbaka. Och jag presenterar den för er här och nu:<br/>
                    </p>
                    <h2>Skapelsen</h2>

                    <blockquote>
                        Och Gud sade: "Varde en frisyr som skiljer vett från vansinne." Och
                        Gud skapade en frisyr som var kort där uppe och lång bak i nacken och
                        skiljde på så sätt vettet från vansinnet. Och Gud såg att det var gott.
                        Och Gud sade: "Må den nyskapade frisyren bliva känd som Hockeyfrillan,
                        och låt frisörernas tumregel kallas 3:1, minimum tre gånger så långt
                        i nacken som uppe på huvudet." Och det skedde så. Och det blev afton,
                        och det blev morgon den åttonde dagen.
                    </blockquote>
                </p>
            </section>
            <section className={`${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Frisyrer</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/frillor/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedFrisyrData()
    return {
        props: {
            allPostsData
        }
    }
}
