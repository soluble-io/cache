import { parseDsn } from '../cache-dsn-parser';

describe('parseDsn', () => {
  describe('when provided dsn contains all options', () => {
    it('should return the correct parsed params', () => {
      expect(parseDsn('redis://username:password@www.example.com:6379/0')).toStrictEqual({
        driver: 'redis',
        pass: 'password',
        host: 'www.example.com',
        user: 'username',
        port: 6379,
        db: '0',
      });
    });
  });
  describe('when provided password contains special characters', () => {
    it('should return the correct parsed params', () => {
      expect(parseDsn('redis://username:P@/ssw/rd@www.example.com:6379/0')).toStrictEqual({
        driver: 'redis',
        pass: 'P@/ssw/rd',
        host: 'www.example.com',
        user: 'username',
        port: 6379,
        db: '0',
      });
    });
  });
  describe('when a dsn is provided with missing user', () => {
    it('should return the correct parsed params', () => {
      expect(parseDsn('redis://:password@www.example.com:6379/0')).toStrictEqual({
        driver: 'redis',
        pass: 'password',
        host: 'www.example.com',
        port: 6379,
        db: '0',
      });
    });
  });
  describe('when a dsn is provided with no user/pass', () => {
    it('should return options all parts', () => {
      const dsn = 'redis://www.example.com:6379/0';
      expect(parseDsn(dsn)).toStrictEqual({
        driver: 'redis',
        host: 'www.example.com',
        port: 6379,
        db: '0',
      });
    });
  });
  describe('when a dsn is provided with host only', () => {
    it('should return options all parts', () => {
      const dsn = 'redis://localhost';
      expect(parseDsn(dsn)).toStrictEqual({
        driver: 'redis',
        host: 'localhost',
      });
    });
  });
  describe('when a dsn is provided with host and port only', () => {
    it('should return options all parts', () => {
      const dsn = 'redis://localhost:6379';
      expect(parseDsn(dsn)).toStrictEqual({
        driver: 'redis',
        host: 'localhost',
        port: 6379,
      });
    });
  });
  describe('when a dsn is provided with host, port and db only', () => {
    it('should return options all parts', () => {
      const dsn = 'redis://localhost:6379/0';
      expect(parseDsn(dsn)).toStrictEqual({
        driver: 'redis',
        host: 'localhost',
        port: 6379,
        db: '0',
      });
    });
  });
  describe('when a dsn is invalid', () => {
    it('should return an error', () => {
      expect(parseDsn('redis:///0')).toBeInstanceOf(Error);
    });
  });
});
