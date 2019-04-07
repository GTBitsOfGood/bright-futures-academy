import React, { Component } from 'react';
import { founders } from './../images'
import BoardOfDirectors from './BoardOfDirectors';
import './css/Leadership.css';

class Leadership extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="background">
                <div className="Leadership-Background">
                    <h1>- LEADERSHIP -</h1>
                </div>
                <div className = "founders">
                    <img src={ founders } alt="Founders" width="25%" height="25%"/>
                    <div className="founders-description">
                        <h2>Founders</h2>
                        <h3>Philip & Gail Ross</h3>
                        <p>This is a place holder for more information about founders needed from BFA. This is a place holder for more information about founders needed from BFA. This is a place holder for more information about founders needed from BFA. This is a place holder for more information about founders needed from BFA. This is a place holder for more information about founders needed from BFA. This is a place holder for more information about founders needed from BFA.</p>
                    </div>
                </div>
                <div className="board-of-directors top">
                    <h2>Board of Directors</h2>
                    <BoardOfDirectors name="Rob Metcalf (Chairman)" position="International Director, JLL"
                    description="Rob leads the Atlanta Region for JLL Brokerage. He provides real estate solutions that create maximum value for his clients. His twenty-seven years’ of experience in the industry coupled with transactions totaling more than 15 million square feet allow him to exceed his client’s expectations, regardless of market conditions. Rob graduated from the University of Illinois with a degree in Finance and from Georgia State with a Masters in Real Estate. He has written numerous articles for the National Real Estate Investor and the Atlanta Business Chronicle. Rob has been recognized in numerous capacities for his success including; Atlanta Commercial Board of Realtors Top 10 Producers, Coldwell Colbert Circle, and CoStar Power Broker Award."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Michael Andreas, CFA CMT (Vice Chairman)" position="IDirector, Fixed Income Sales and Trading"
                    description="Michael is a director at SunTrust Robinson Humphrey in their fixed income sales and trading group with an emphasis on mortgage backed securities. Michael works with institutional investors to find investment solutions in the collateralized mortgage obligation (CMO) market. He earned a Masters in Finance from the University of Florida and is a holder of the Chartered Financial Analyst® designation and Chartered Market Technician® designation. He has served as a volunteer at Bright Futures for eight years in numerous roles including athletic coach, academic tutor, and board member."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Craig Viergever, SIOR (Immediate Past Chairman)" position="Executive Vice President and Principal, Lee & Associates"
                    description="Craig has thirty years experiences in commercial real estate with an emphasis on the industrial sector. He specializes in representing owners/sellers as well as tenants/buyers primarily in Atlanta. Most recently, he has focused on representing a number of manufacturing and e-commerce companies with growth and consolidation needs. He joined SIOR in 2006 which represents the highest level of professionalism in his industry. Craig graduated from the University of Georgia with a degree in Economics and Political Science. Craig was awarded the Commercial Board of Realtor’s Community Service Award in 2011 for his continued service to Bright Futures Atlanta."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Millard Choate" position="EPresident and CEO, Choate Construction"
                    description="Millard Choate founded Choate Construction Company, Inc. in 1989 and has served as its President for almost 40 years. Since March of 2017 he has transitioned to Chairman of the Board and CEO of the company. He has also been previously chosen as an Entrepreneur of the Year, sponsored by Ernst & Young, Inc. Magazine, and Merrill Lynch, Volunteer of the Year by Cystic Fibrosis Foundation, and was inducted into Clemson University’s Construction Science and Management Department Hall of Fame. He is active in several charitable organizations including Cystic Fibrosis Foundation, Special Olympics Georgia and Homestretch."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="John Fitzpatrick" position="President and CEO, Force Marketing"
                    description="John co-founded Force Marketing in 2007, and since then, has led the company to become the leading provider of ROI-driven and tech-enabled multi-channel automotive marketing services to clients throughout North America. Its clients include large dealer groups, Tier II ad associations and OEMs. Today, he leads a team of more than 100 marketing professionals in Force Marketing’s Atlanta headquarters. For the past seven consecutive years, Force Marketing has earned a spot on the Inc. magazine 500|5000 list of the fastest-growing private companies in the U.S. Other accolades include the Atlanta Business Chronicle’s Pacesetter Award in 2012, 2014 and 2015; a spot on the list of the 101 Best & Brightest Companies to Work For in Atlanta in 2014 and 2015; and a spot on the list of the Best & Brightest Companies to Work For in the U.S. in 2015. John graduated from the University of Florida with a degree in Political Science and Entrepreneurship."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Matthew Hartnett, CFP" position="Vice President, Merrill Lynch"
                    description="Matthew is a Vice President with Merrill Lynch Wealth Management. His primary function is to provide financial advice and guidance to families and corporate executives. Matt completed his Bachelor of Arts at Hamilton College in Clinton, NY prior to joining Merrill Lynch in 2006. In 2010, Matt successfully completed the Chartered Retirement Planning Counselor program; in 2011, he attained the designation of Certified Financial Planner ™. Matt has served as a volunteer with Bright Futures Atlanta since 2014, utilizing his financial expertise and business experience to help with strategic decisions."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Tony Johns" position="Executive Director, Crossroads Community Ministries"
                    description="Tony is a graduate of Lee University and the Pentecostal Theological Seminary, where he earned a Master of Arts in Christian Ministries and was recognized in 2011 as Alumnus of the Year. He is an ordained minister with the Church of God (Cleveland, TN) and currently serves as Executive Director at Crossroads Community Ministries in Atlanta, GA. Since 1995 he has been active in full-time ministry, non-profit community development and secondary and post-secondary education. Tony has founded several organizations including Next Level Outreach, Richmond Oaks Mission and The Urban Discipleship Center. In 2003 he joined the leadership team at City of Refuge (Atlanta) serving in several different leadership roles including Chief Development Officer and Chief Operating Officer. In July of 2016 he became Executive Director for Crossroads Community Ministries."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="David Kinsey" position="Owner, Veritas Classical Schools"
                    description="David is the owner and director of Veritas Classical School, a home schooling method that emphasizes the classical Christian model of education. He graduated from Bryan College in 1973 with a BA in Bible, and from Reformed Theological Seminary in 1988, with a MA in School Administration. He has over 30 years of experience as an educator, with 23 of those years in school administration. As a teacher, David taught 6th – 10th grade level math courses, Spanish and history. Dave served for 15 years as the Headmaster at Fellowship Christian Academy in Roswell, during which time the school grew from 160 students to over 600 in the K – 12 programs. He was also instrumental in the formation of the school at Perimeter Presbyterian Church in Duluth. David’s extensive education background makes him a valuable consultant to Bright Future Atlanta."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Ross Lautenbach" position="Founder and CEO, Freightline"
                    description="Ross founded Freightline, a transportation and logistics company that connects businesses and carriers to move freight more efficiently across North America. His unique platform optimizes supply chain networks by utilizing assets from a multitude of carriers. Prior to starting his own company, Ross was an assistant vice president and regional sales manager with the Hub Group, an industry leader in the transportation management industry. Ross graduated from Grand Valley State University with a dual degree in Economics and Finance. Ross has been involved with Bright Futures Atlanta for over a decade and is involved in all major operating initiatives."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Brandon Powell" position="Founder and CEO, HatchWorks"
                    description="Brandon founded HatchWorks, a digital technology firm that empowers clients to thrive in a market that is connected, measured, and instantaneous. Their strategy is to partner with clients to help them advance their technology, products, and experiences so that they are quickly able to evolve and grow in today’s digital market. Prior to starting his own company, Brandon was the Head of Products at Cricket Wireless, a fully owned subsidiary of AT&T. His team was accountable for defining and delivering the entire product portfolio strategy, vision and road map for the company. Brandon graduated from The University of Georgia with a degree in Management Information Systems and from Harvard Business School’s Program for Leadership Development."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Tony Van Gelder" position="Owner/Advisor, Van Gelder Financial"
                    description="Tony is the Owner and lead Financial Advisor at Van Gelder Financial (formerly ETI Financial Group). Van Gelder Financial focuses on providing holistic financial planning and wealth management solutions to individuals and families with the three key components of wisdom, consistency, and integrity guiding their work. Prior to this role, Tony spent ten years working in Asia and Australia where he held various corporate finance roles for global healthcare companies. Tony holds a bachelors degree in Finance and Operations Management from Indiana University and his MBA from Macquarie University in Sydney, Australia. Tony has held various volunteer positions with organizations across the world, but he is most passionate about using his experience and knowledge to bring financial literacy to the youth of Bright Futures Atlanta."/>
                </div>
                <div className="board-of-directors">
                    <BoardOfDirectors name="Donald Washington" position="Vice President, Bank of America Merrill Lynch"
                    description="Donald is a Vice President and Relationship Manager within the Global Commercial Banking Group of Bank of America Merrill Lynch. Donald manages a portfolio of middle market clients (annual revenue of $50MM-$2B+) and is responsible for leading, directing and coordinating an internal deal team to effectively present and deliver strategic financial solutions to clients and prospects. In addition to his service at Bright Futures Atlanta, Donald is a member of the Emerging 100, an organization dedicated to the success of youth within disadvantaged communities in Atlanta, and LEAD Atlanta which is a leadership development program for young professionals. Donald graduated from the University of New Orleans, where he majored in finance and minored in management. He is currently a MBA candidate at Georgia Tech Scheller College of Business."/>
                </div>
            </div>
        );
    }
}

export default Leadership;
