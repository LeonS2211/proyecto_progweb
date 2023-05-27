'use client';
import React from 'react';
import RenderTabBar from '../../components/RenderTabBar/RenderTabBar';
import PaginaComp from '../../components/PaginaComp/PaginaComp';

const PaginaPerfil = () => {
  return (
    <div>
      <h1>Página de Perfil</h1>
      <RenderTabBar />
      <PaginaComp />
    </div>
  );
};

export default PaginaPerfil;

