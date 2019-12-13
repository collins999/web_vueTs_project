/**
 * 全局过滤器
 */

const dateServer = (value: string): string => {
    return value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
};

export { dateServer };
