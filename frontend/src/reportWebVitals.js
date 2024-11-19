const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};
// Largest Contentful Paint (LCP): Mede o tempo de carregamento do maior elemento visível na página.
// First Input Delay (FID): Mede a interatividade, ou seja, o tempo até que o navegador responda à primeira interação do usuário.
// Cumulative Layout Shift (CLS): Mede a estabilidade visual, verificando se os elementos da página mudam inesperadamente durante o carregamento.

export default reportWebVitals;
