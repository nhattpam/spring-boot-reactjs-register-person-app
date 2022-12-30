package com.nhattpam.UserRegister.repository.controller;

import com.nhattpam.UserRegister.model.Student;
import com.nhattpam.UserRegister.repository.service.StudentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {
    
    
    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    
    //add student
    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }
    
    //list student
    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudent();
    }
}
