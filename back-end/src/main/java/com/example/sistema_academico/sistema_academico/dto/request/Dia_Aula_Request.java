package com.example.sistema_academico.sistema_academico.dto.request;

import lombok.Data;

import java.time.LocalDate;
@Data
public class Dia_Aula_Request {

    private Integer id;
    private LocalDate data_aula;
}
