import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "did we discuss the Tower Arts Centre Land Proposals in 2022?",
        value: "did we discuss the Tower Arts Centre Land Proposals in 2022"
    },
    { text: "Summarise the issues in decision report about the tram pole issue", value: "Summarise the issues in the decision report about the tram pole issue" },
    { text: "What was the decision recorded in the minutes about the tram pole issue", value: "What was the decision recorded in the minutes about the tram pole issue?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
