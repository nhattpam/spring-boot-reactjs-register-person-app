package com.nhattpam.UserRegister.repository.service;

import com.nhattpam.UserRegister.model.Student;
import java.util.List;
import org.springframework.stereotype.Service;


public interface StudentService {
    //add student
    public Student saveStudent(Student student);
    
    //list student
    public List<Student> getAllStudent();
}
