import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>WHY SHOULD I INVEST IN REAL ESTATE?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> Housing and real estate has a variety of benefits for investors, including predictable returns, single-asset ownership, and significant tax savings</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> Real estate is very stable compared to the equities market</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> Workforce housing is undersupplied around the country, very little new stock in the development pipeline, and demand is increasing</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>WHY BUY FROM VAROSI PROPERTIES ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> Varosi Properties is committed to sourcing high-quality deals in growth markets</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> We provide a clean and transparent view of all properties</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> With us dispute over properties hardly ever happens. You have every right to go and verify every of our property with the state government and other relevant authorities.</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> There's no hidden fees. NEVER</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> When you buy from Varosi Properties, you don't have to go through the stress of getting receipt and government documentation yourself. we will do the documentation in your favor.</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> The property is well planned. This is why we will show you the estate or property  layout plans, key infrastructures, the type of buildings that is allowed within the estate or the property. So every property you buy for investment or for living  has been pre-planned for you.</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> Your property can never be stolen. With Varosi Properties, you are rest assured that your property is yours forever, it cannot be stolen by land grabbers</li>
                <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> There's a robust instalment payment plan for every of our property</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>HOW RISKY IS MY INVESTMENT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              Any investment will have some risks involved. There is no guarantee to any kind of investment, whether that investment is in stocks, bonds, or crypto. However, Real estate has proven to be one of the safest and most stable investment choices available. Risks are carefully outlined in the Private Placement Memorandum for each property. Varosi Properties works hard to mitigate any risk by having a careful process of uncovering devalued assets and turning them into profitable ones.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>DOES THE FOUNDERS INVEST THEIR OWN MONEY?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              At Varosi Properties, each one of our founders invests in the deal right along with you. We don’t want to lose our money either! We take your money and your trust in us very seriously. We would not choose an asset if we thought there was significant chance of losing everything. Ultimately, we believe there is little chance of losing our money and instead a very high probability of creating more income. We want to be completely transparent and always encourage you to do your own research before making a decision.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>WHAT MARKETS DOES VAROSI PROPERTIES INVEST IN AND WHY?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have strategically chosen to invest in multi family properties in various locations for numerous different reasons. Below are a few of the key factors that have driven our purchase and market decisions.
            <ul>
              <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> Solid growth projections in the chosen area</li>
              <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> These areas typically have lower regulations for businesses</li>
              <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> The cost of living in this area is generally on the lower side. </li>
              <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> Evidence of high population growth in the area, which translates to more supply for multi-family housing.</li>
              <li><i className="fa fa-check" style={{color:"rgba(0, 0, 0, 0.5)"}}></i> The management  has grown a huge familiarity with the marketplace, and knows unique factors that might go unnoticed by someone who does not have access to the information we have.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>WHAT IS VAROSI PROPERTY ACQUISITION STRATEGY?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              At Varosi Properties, our main focus is on obtaining the best return for you, the investor, possible. One of the most strategic ways to do this is to look for and purchase properties that have significant growth opportunities. These properties may be older, look worn out, or have out of date amenities.
              Our team is able to add value to these properties, by refreshing interiors, adding amenities, renovating units, etc. All of these things drive rent up to produce more profit, while still staying affordable for tenants.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
