import { useQuestionsFeed, useQuestionStyle } from './QuestionsStyle';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const dataQ = [
    {
        Q: "What is the source of the virus?",
        answer: "Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people."
    },
    {
        Q: "How does the virus spread?",
        answer: "Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people."
    },
    {
        Q: "who has had COVID-19 spread the illness to others?",
        answer: "Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people."
    },
    {
        Q: "Will warm weather stop the outbreak of COVID-19?",
        answer: "Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people."
    },
    {
        Q: "What is community spread?",
        answer: "Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people."
    }
]


export default function Questions() {
    const classes = useQuestionStyle()

    return (
        <div className={classes.root} >
            <div className={classes.titel}><h2> Frequently Asked & Questions </h2></div>
            <div className={classes.Questions} >
                <div>
                    {dataQ.map(item => <QuestionsFeed answer={item.answer} Q={item.Q} />)}
                </div>
                <div>
                    {dataQ.map(item => <QuestionsFeed answer={item.answer} Q={item.Q} />)}
                </div>

            </div>
        </div>
    )
}


function QuestionsFeed({ answer, Q }) {
    const classes = useQuestionsFeed()
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.QuestionsFeed} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {Q}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}