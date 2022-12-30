import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';

export default function Student() {
    //viet function
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    //ham getAll
    const [students, setStudents] = React.useState([]);


    //sau khi nhan nut submit
    const handleClick = (e) => {
        e.preventDefault()
        const student = { name, address }
        console.log(student)
        //gui du lieu qua Backend
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student is added")
        })
    }

    //hien thi tat ca sinh vien 
    React.useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])


    return (
        <Container>
            <h1 style={{ color: "black" }}>Add Student</h1>
            <Paper elevation={3} style={paperStyle}>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="contained" color="success" onClick={handleClick}>
                        Submit
                    </Button>
                </Box>
                {name}
                {address}
            </Paper>

            <h1>Students</h1>
            <Paper elevation={3} style={paperStyle}>
                    {students.map(student => (
                        <Paper elevation={6} style={{margin:"10px", padding:"15px",
                            textAlign:"left"
                        }} key={student.id}> 
                            Id: {student.id}<br/>
                            Name: {student.name}<br/>
                            Address: {student.address}

                        </Paper>
                    ))}
            </Paper>
        </Container>

    );
}
