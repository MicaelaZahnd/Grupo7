from rest_framework.routers import SimpleRouter
from .views import DireccionViewSet

router = SimpleRouter()
router.register(r'sucur', SucursalViewSet, basename='sucur')

urlpatterns = router.urls