import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "On what dates did Council meet during 2022?",
        value: "On what dates did Council meet during 2022?"
    },
    { text: "Did Council receive a decision report about a tram pole during 2022?", value: "Did Council receive a decision report about a tram pole during 2022?" },
    { text: "Which people gave deputations and on what topics in 2022 ?", value: "Which people gave deputations and on what topics in 2022 ?" }
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
