import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getDocs, collection } from 'firebase/firestore';
import { database } from '../../firebase-config';
import BasicTable from './Table';

export default function Result() {
    const databaseRef = collection(database, 'Leader Board');
    const navigate = useNavigate();
    const { state } = useLocation();
    const [finalResult, setFinalResult] = React.useState(null);
    const [leaderBoardData, setLeaderBoardData] = React.useState([]);

    React.useEffect(() => {
        if (state) {
            const { finalResults } = state;
            setFinalResult(finalResults);
        }
        getData();
    }, [state]);

    const getData = async() => {
        const data =  await getDocs(databaseRef);
        setLeaderBoardData(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                .sort((a, b) => parseFloat(b.finalScore) - parseFloat(a.finalScore))
        );
    };

    const retryQuiz = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Results</h1>
            {finalResult === null ? (
                <></>
            ) : (
                <h2>Your Final Score is {finalResult}</h2>
            )}

            <Button
                onClick={retryQuiz}
                variant="contained"
                style={{ marginBottom: 30 }}
            >
                Play Again
            </Button>
            <Divider />
            <h2>Leader Board</h2>
            <div style={{ margin: 20 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leaderBoardData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.finalScore}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <BasicTable leaderBoardData={leaderBoardData} />
        </div>
    );
}
