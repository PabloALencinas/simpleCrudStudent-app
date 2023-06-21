package com.pabloagustin.simpleapp.service;

import com.pabloagustin.simpleapp.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
