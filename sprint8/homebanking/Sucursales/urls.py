from rest_framework.routers import SimpleRouter
from .views import SucursalViewSet

router = SimpleRouter()
router.register(r'sucur', SucursalViewSet, basename='sucur')

urlpatterns = router.urls