import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, colors } from '@mui/material';
import { makeStyles } from '@mui/material';

export default function Student() {
    const paperStyle = {padding:'50px 20px', width:600, margin:'20px auto'}
    // For adding student and get Students

    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [students, setStudents] = React.useState([]);

    // Handle Click for submiting

    const handleClick = (e) => {
        e.preventDefault();
        const student = {name, address};
        console.log(student)
        // API CALL FROM REACT USING FETCH
        fetch("http://localhost:8081/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)}
        ).then(() => {console.log("New Student Added!")})
    }

    useEffect(() => {
        fetch("http://localhost:8081/student/getAll")
        .then(res => res.json())
        .then((result) => {
            setStudents(result);
        })
    }, [])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:'#1976d2'}}>Add Student</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
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
        </Paper>
        <h1>Students</h1>
        <Paper elevation={3} style={paperStyle}>
            
            {students.map(student =>(
                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>

                    Nombre: {student.name} 
                    <br/>

                    Ciudad: {student.address}

                </Paper>
            ))}


        </Paper>
    </Container>
    
  );
}