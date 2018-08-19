package fsd.moviecruiser.authenticator.service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import fsd.moviecruiser.authenticator.repository.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.TextCodec;

@Service
public class JwtSecurityTokenService implements SecurityTokenService {
	@Value("${token.secureKey}")
	private String tokenSecureKey;

	@Override
	public Map<String, String> generateSecurityToken(User user) {
		Map<String, String> returnMap = new HashMap<>();
		returnMap.put("JWTTOKEN", Jwts.builder().setIssuer("fsd-moviecruiser-authenticator-service")
				.setSubject(user.getUserId()).claim("name", user.getFullName())
				.setIssuedAt(Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()))
				.setExpiration(Date.from(LocalDate.now().plusDays(1).atStartOfDay(ZoneId.systemDefault()).toInstant()))
				.signWith(SignatureAlgorithm.HS512, TextCodec.BASE64.decode(tokenSecureKey)).compact());
		returnMap.put("Message", "JWT Generation Successful.");
		return returnMap;
	}

}
