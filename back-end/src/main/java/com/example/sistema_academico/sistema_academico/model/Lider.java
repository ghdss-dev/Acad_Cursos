package com.example.sistema_academico.sistema_academico.model;

import com.example.sistema_academico.sistema_academico.dto.request.LiderRequest;
import lombok.*;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "lider")

public class Lider {

    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    private Integer id;

    @Column(name = "nome", length = 100)
    private String nome;

    @Column(name = "telefone", length = 100)
    private String telefone;

    @Column(name = "data_cadastro")
    private LocalDate data_cadastro;

    @Column(name = "status_2", length = 100)
    private String status_2;

    @Column(name = "data_novo_contato")
    private LocalDate data_novo_contato;

    @Column(name = "observacao", length = 900)
    private String observacao;

    public static Lider of(LiderRequest request) {

        var lider = new Lider();
        lider.setData_cadastro(LocalDate.now());
        lider.setData_novo_contato(LocalDate.now());
        BeanUtils.copyProperties(request, lider);

        return lider;
    }
}
