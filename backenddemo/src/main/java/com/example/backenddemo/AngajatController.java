package com.example.backenddemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//pentru request-uri
@RestController
public class AngajatController {
    @Autowired
    private AngajatRepository angajatRepository;

    //POST
    @PostMapping("/angajat")
    public Angajat addAngajat(@RequestBody Angajat angajat) {
        return angajatRepository.save(angajat);
    }

    @GetMapping("/angajati")
    public List<Angajat> getAllAngajati() {
        return angajatRepository.findAll();
    }

    @GetMapping("/angajat/{id}")
    public Angajat getAngajat(@PathVariable Long id) {
        return angajatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Angajat not found"));
    }

    @DeleteMapping("/angajat/{id}")
    public void deleteAngajat(@PathVariable Long id) {
        angajatRepository.deleteById(id);
    }

        @GetMapping("/angajatName/{id}")
    public AngajatDTO getAngajatName(@PathVariable Long id) {
        Angajat angajat = angajatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Angajat not found"));
        AngajatDTO angajatDTO = new AngajatDTO();
        angajatDTO.setName(angajat.getName());
        return angajatDTO;
    }

    @GetMapping("/angajatNume/{id}")
    public String getAngajatNume(@PathVariable Long id) {
        Angajat angajat = angajatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Angajat not found"));
        return angajat.getName();
    }

}
