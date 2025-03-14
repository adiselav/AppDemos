package com.example.backenddemo;

import org.springframework.data.jpa.repository.JpaRepository;

//implementeaza metode ale bazei de date pentru entitatea mea
public interface AngajatRepository extends JpaRepository<Angajat, Long> {

}
