.include <name.ini>

USE_FREENIT = YES
SERVICE != echo ${app_name}front
REGGAE_PATH :=/usr/local/share/reggae


publish: collect
.if !defined(server)
	@echo "Usage: make publish server=<server> domain=<domain>"
	@fail
.endif
.if !defined(domain)
	@echo "Usage: make publish server=<server> domain=<domain>"
	@fail
.endif
	rsync -avc --progress --delete-after build/ ${server}:/usr/cbsd/jails-data/nginx-data/usr/local/www/${domain}/

.include <${REGGAE_PATH}/mk/service.mk>
