import styled from 'styled-components';

export const Container = styled.form`

    margin-top: 7rem;

    .input {

        background-color: var(--text-area-background);
        color: var(--text-area-text);

        text-decoration: none;
        border: none;

        width: 15.5rem;
        height: 3rem;

        font-size: 1.5rem;
        text-align: center;

        margin-right: 1rem;

    }

    button {

        background-color: var(--button-background);
        color: var(--button-text);

        text-decoration: none;
        border: none;

        width: 11rem;
        height: 3rem;

        font-size: 1.5rem;
        text-align: center;

    }

    table {

        width: 100%;
        padding: 2rem;

        th {
            color: var(--table);
            font-weight: 500;
            padding: 0.25rem 0.5rem;
            text-align: left;
        }

        td {
            padding: 0.5rem;
            border: 0;
            background: var(--table);
            text-align: left;
            color: var(--table-text);
            border-radius: 0.25rem;
        }
    }
    

`