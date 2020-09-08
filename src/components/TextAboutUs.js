import React, {useState} from "react"
import {Col, Container, Row} from "reactstrap"
import "../../assets/styles/about.scss"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TextAboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggleTwo = () => setIsOpenTwo(!isOpenTwo);
    const texts = [
        "Mówi się, że to właśnie zdrowie, piękny wygląd i zabezpieczenie\n" +
        "przyszłości finansowej własnej rodziny jest pełnym szczęściem.",
        "Kiedy czujemy się dobrze we własnym ciele, mamy świetną kondycję fizyczną, dużo energii i\n" +
        "wyglądamy młodziej niż wskazuje PESEL, wówczas świat nam bardziej sprzyja, a wszystkie przeszkody\n" +
        "stają się łatwiejsze do pokonania i okazują się ciekawymi wyzwaniami.",
        "Aby tak było dobrze mieć kompetentnego partnera w tym zakresie.",
        "Koncepcja Zdrowia i Urody to Twoje wsparcie dla lepszej jakości Twojego życia – dzień po dniu.",
    ]

    const textsTwo = [
        "Niezależnie od tego, czy przechodzisz przez stresujący okres w życiu, nie masz czasu, aby codziennie\n" +
        "zadbać o zbilansowaną i bogatą w składniki odżywcze dietę, czy brakuje Ci czasu lub pieniędzy na\n" +
        "przebywanie w salonach piękności, czy też chcesz zrzucić kilka kilogramów, Koncepcja Zdrowia i\n" +
        "Urody oferuje Ci praktyczne i sprawdzone rozwiązania.",
        'Koncepcja Zdrowia i Urody łączy suplementy diety najwyższej jakości w indywidualne rozwiązania,\n' +
        'dopasowane do Twoich potrzeb.',
        'Czerpiąc inspirację z natury i bazując na aktualnym stanie wiedzy naukowej wykorzystujemy produkty\n' +
        'firmy LR, ponieważ zapewniają maksymalną skuteczność i stałą, wysoką jakość',
        'Koncepcja Zdrowia i Urody oferuje całościowe rozwiązania, które oprócz suplementacji i genialnych\n' +
        'produktów dla urody, wspierają Cię ciągłymi wskazówkami w zakresie odżywiania, aktywności\n' +
        'fizycznej i ciągłej motywacji do poprawy stylu życia.',
        'Wsparcie naszej społeczności to przede wszystkim bieżący dostęp do osiągnięć innych klubowiczów\n' +
        'co zapewnia, że łatwiej będzie Ci wytrwać w Twoich postanowieniach.',
        'Jesteśmy z Tobą każdego dnia, tak długo jak tego potrzebujesz.'

    ]

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="title text-center ">Koncepcja Zdrowia i Urody</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <VerticalTimeline animate>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'linear-gradient(0deg, #4CAF50 0%, #8BC34A 100%)',
                            color: 'white'
                        }}

                        contentArrowStyle={{borderRight: '7px solid  green'}}
                        iconStyle={{background: '#2e9222', color: '#fff'}}
                        icon={<img style={{padding: "5px"}} src="/images/logo.png" alt="logo"/>}
                    >

                        <p>
                            KROK PO KROKU DO TWOJEGO OPTYMALNEGO ZDROWIA I PIĘKNEGO WYGLĄDU
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'linear-gradient(180deg, #4CAF50 0%, #8BC34A 100%)',
                            color: 'white'
                        }}
                        contentArrowStyle={{borderRight: '7px solid  green'}}

                        iconStyle={{background: '#2e9222', color: '#fff'}}
                    >

                        <p>
                            TWOJE DOBRE SAMOPOCZUCIE JEST PODSTAWĄ, GWARANTUJĄCĄ OSIĄGANIE
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
            <Row>
                <Col>
                    <h1 className="title text-center "> Czy istnieje recepta na szczęście? </h1>
                </Col>
            </Row>
            <Container>
                <VerticalTimeline animate>
                    {
                        texts.map((t,i)=>{
                            return(
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        color: '#28282',
                                        boxShadow:  '3px 3px 6px #3b8d2a, -3px -3px 6px #69fb4c'
                                    }}
                                    contentArrowStyle={{borderRight: '7px solid  green'}}
                                    icon={<img style={{padding: "5px",opacity:`0.${i+4}`}} alt="logo" src="/images/logo.png"/>}
                                    iconStyle={{background: '#2e9222', color: '#fff'}}
                                >

                                    <p>
                                        {t}
                                    </p>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                    </VerticalTimeline>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h1 className="title text-center "> Zainteresowany? </h1>
                    </Col>
                </Row>
            <VerticalTimeline animate>
                {
                    texts.map((t,i)=>{
                        return(
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    color: '#28282',
                                    boxShadow:  '3px 3px 6px #3b8d2a, -3px -3px 6px #69fb4c'
                                }}
                                contentArrowStyle={{borderRight: '7px solid  green'}}
                                icon={<img style={{padding: "5px",opacity:`0.${i+4}`}} alt="logo" src="/images/logo.png"/>}
                                iconStyle={{background: '#2e9222', color: '#fff'}}
                            >

                                <p>
                                    {t}
                                </p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </Container>
            <Container>
                <Row>
                    <Col>
                        <h1 className="title text-center ">Zainteresowany...? </h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TextAboutUs;